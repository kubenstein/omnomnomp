import { Op } from 'sequelize';
import User from 'lib/models/user';
import Like from 'lib/models/like';
import Image from 'lib/models/image';

const resolvers = {
  like: async ({ userEmail: email, imageId }) => {
    const { id: userId } = await User.findOne({ where: { email }, attributes: ['id'] });
    await Like.findOrCreate({ where: { userId, imageId } });
    const image = await Image.findOne({ where: { id: imageId } });
    return {
      ...image.dataValues,
      liked: true,
    };
  },

  images: async ({ userEmail: email, fromId = null }) => {
    const { id: userId } = await User.findOne({ where: { email }, attributes: ['id'] });
    const likedImageIds = await Like.findAll({ where: { userId }, attributes: ['imageId'] });
    const images = await Image.findAll({
      ...(fromId && { where: { id: { [Op.lt]: fromId } } }),
      limit: 30,
      order: [['id', 'desc']],
    });
    return images.map(image => ({
      ...image.dataValues,
      liked: likedImageIds.indexOf(image.id) !== -1,
    }));
  },

  likedImages: async ({ userEmail: email }) => {
    const { id: userId } = await User.findOne({ where: { email }, attributes: ['id'] });
    const likes = await Like.findAll({ where: { userId }, attributes: ['imageId'] });
    const likedImageIds = likes.map(l => l.imageId);
    const images = await Image.findAll({ where: { id: likedImageIds } });
    return images.map(image => ({
      ...image.dataValues,
      liked: true,
    }));
  },

  addImage: async ({ userEmail: _, url, title }) => {
    const [image] = await Image.findOrCreate({ where: { url, title } });
    return {
      ...image.dataValues,
      liked: false,
    };
  },
};

export default resolvers;
