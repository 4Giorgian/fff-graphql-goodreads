export default {
  Query: {
    allUsers: (parent, args, {models}) => models.User.find(),
    getUser: (parent, args, {models}) => models.User.findOne()
  },
  Mutation: {
    createUser: (parent, args, {models}) => models.User.create(args)
  }
}
