const { Noti } = require("./model");
const { ApolloError } = require("apollo-server");

module.exports = {
    Query: {
        getnotis: async (parent, input, context) => {
            try {
                const id = context.req.userId;
                console.log(id);
                const userNoti = await Noti.find({ target: id });
                console.log(userNoti);
                return userNoti;
            } catch (e) {
                throw new ApolloError("fail to get notis", 877);
            }
        },
    },

    Mutation: {
        friendreq: async (obj, { input }) => {
            // console.log("in mutation");
            try {
                // const id = context.req.id;
                // console.log(id, input);
                const notification = {
                    emisor: input.emisor,
                    target: input.target,
                    notitype: input.notitype,
                    status: input.status,
                };
                const Notification = new Noti(notification);
                console.log(Notification);
                await Notification.save();
                return Notification;
            } catch (e) {
                throw new ApolloError("fail no create notification", 555);
            }
        },
    },
};
