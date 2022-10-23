const { Router } = require('express');

const { DishesAdminController } = require('../controllers/DishesAdminController');

const dishesRoutes = Router();

const dishesAdminController = new DishesAdminController();

dishesRoutes.post('/', dishesAdminController.createDishes);
dishesRoutes.put('/:id', dishesAdminController.updateDish);
dishesRoutes.delete('/:id', dishesAdminController.deleteDish);

module.exports = { dishesRoutes };