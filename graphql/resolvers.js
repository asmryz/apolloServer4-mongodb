//const db = require("../models");

module.exports = {
    Query: {
        students: async (parent, args, { db }, info) => {
            return await db.Student.find().sort({ regno: 1 });
        },
        marks: async (parent, args, { db }, info) => {
            return await db.Mark.find().sort({ hid: 1 });
        },
        heads: async (parent, args, { db }, info) => {
            return await db.Head.find().sort({ hid: 1 });
        },
        grades: async (parent, args, { db }, info) => {
            return await db.Grade.find().sort({ gradeid: 1 });
        },
        student: async (parent, args, { db }, info) => {
            console.log("resolver args :>> ", args);
            return await db.Student.findOne({ regno: args.regno });
        },
    },
    Student: {
        marks: async (parent, args, { db }, info) => {
            return await db.Mark.find({ regno: parent.regno }).sort({ hid: 1 });
        },
    },
    Mark: {
        student: async (parent, args, { db }, info) => {
            return await db.Student.findOne({ regno: parent.regno });
        },
        head: async (parent, args, { db }, info) => {
            return await db.Head.findOne({ hid: parent.hid });
        },
    },
    Mutation: {
        updatemarks: async (parent, args, { db }, info) => {
            return await db.Mark.findOneAndUpdate(
                { hid: args.hid, regno: args.regno },
                {
                    $set: {
                        marks: args.mark,
                    },
                },
                { new: true }
            );
        },
    },
};
