import Joi from 'joi-browser';

export default Joi.object().keys({
  firstName: Joi.string().min(3).max(45).required().label('firstName'),
  lastName: Joi.string().min(3).max(45).required().label('lastName'),
  username: Joi.string().min(3).max(45).required().label('lastName'),
  email: Joi.string().email({ minDomainAtoms: 2 }),

  phone: Joi.string().required().label('Phone'),

  password: Joi.string().min(8).max(100).required()
});
