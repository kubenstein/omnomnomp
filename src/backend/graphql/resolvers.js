import { Op } from 'sequelize';
import User from 'lib/models/user';
import Like from 'lib/models/like';
import Image from 'lib/models/image';

const resolvers = {
  images: async ({ userEmail: email, fromId = null }) => {
    const { userId } = await User.findOne({ where: { email }, attributes: ['id'] });
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
    const userId = await User.findOne({ where: { email }, attributes: ['id'] });
    const likedImageIds = await Like.findAll({ where: { userId }, attributes: ['imageId'] });
    const images = await Image.findAll({ where: { id: likedImageIds } });
    return images.map(image => ({
      ...image.dataValues,
      liked: true,
    }));
  },
};

export default resolvers;
