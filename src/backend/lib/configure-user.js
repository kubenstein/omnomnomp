import User from 'lib/models/user';

export default function configureUser({ email }) {
  return User.findOrCreate({ where: { email } });
}
