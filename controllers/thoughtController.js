const { User, Thought } = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const thought = await Thought
        }
    }
}