const express = require('express');
const router = express.Router();
const Todo = require('../model/todoModel.js');
const {authMiddleware } = require('../middleware/authMiddleware.js');


router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.userId;
        
        const todo = await Todo.create({
            title,
            description,
            userId: userId 
        });

        return res.json({
            message: "Todo created successfully",
            todo
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId; 
        const todos = await Todo.find({ userId: userId });

        return res.json(todos);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
    
        const userId = req.userId; 
        
        const todo = await Todo.findById(
            {
               _id:id
           }
        );

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
     return res.json(todo);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});



router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const userId = req.userId; 
        
        const todo = await Todo.findOneAndUpdate(
            { _id: id, userId: userId }, 
            { title, description, completed },
            { new: true }
        );

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        return res.json(todo);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId; 
        const todo = await Todo.findOneAndDelete({ _id: id, userId: userId });

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        return res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
