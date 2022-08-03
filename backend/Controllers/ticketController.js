const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')


//  @desc get user ticket
// @route GET/api/tickets
// @acess  Private
const getTickets = asyncHandler(async (req, res) => {
  
  res.status(200).json({message: 'Get Tickets'})
})
//  @desc get user ticket
// @route POST/api/tickets
// @acess  Private
const createTicket = asyncHandler(async (req, res) => {
  
  res.status(200).json({message: 'Create Tickets'})
})

module.exports = {
    getTickets,
    createTicket,
}