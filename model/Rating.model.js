
import { DataTypes } from 'sequelize';
import sequelize from '../db/dbconfig.js';
import User from './user.model.js';
import Room from './Roomsavailabler.js';

const Rating = sequelize.define('Rating', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    rating: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    review: {
        type: DataTypes.STRING, 
        allowNull: true
    }
});
User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

Room.hasMany(Rating, { foreignKey: 'roomId' });
Rating.belongsTo(Room, { foreignKey: 'roomId' });

sequelize.sync().then(result => {
    console.log("Rating table Created---");
}).catch(err => {
    console.log("Something wrong in user---");
})

export default Rating;
