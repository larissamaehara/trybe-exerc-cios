// src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'employees',
    underscored: true,
  });

  Employee.associate = (models) => { //A função Employee.associate = (models) => {} que criamos é onde declararemos as associações daquele model.
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};

// No caso dos relacionamentos 1:N, não há grande diferença na maneira como criamos as associações
//  bastaria declarar seu model da seguinte forma:

// src/models/employee.model.js

//  module.exports = (sequelize, DataTypes) => {
//  const Employee = sequelize.define('Employee', {
//  ...
//  });

//  Employee.associate = (models) => {
  // Employee.hasMany(models.Address,
    //      { foreignKey: 'employeeId', as: 'addresses' });
    //  };
    
    //  return Employee;
    //  };