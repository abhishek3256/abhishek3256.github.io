db.employees.find({department:"IT"})
db.employees.find({department:{$eq:"IT"}})
// gt lt lte gte eq ne