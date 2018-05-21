import express from 'express';
const {authenticate} = require('../server/middleware/authenticate');
import todoLogic from '../logic/todo.js';
import userLogic  from '../logic/user.js';

export const addRoutes = (app) => {

    app.post('/todos', authenticate, todoLogic.createTodo);
    app.get('/todos/', authenticate, todoLogic.getTodos);
    app.get('/todos/:id', authenticate, todoLogic.getTodo);
    app.delete('/todos/:id', authenticate, todoLogic.deleteTodo);
    app.patch('/todos/:id', authenticate, todoLogic.updateTodo);

    app.post('/users', userLogic.createUser);
    app.post('/users/login', userLogic.userLogin);

    return app;
};