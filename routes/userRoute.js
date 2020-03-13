const fs = require('fs')

const { join } = require('path')

const filePath = join( __dirname, 'users.json')

// Métodos para simular a criação e recuperação de usuários
const getUsers = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

//Criando o método userRoute
const userRoute = (app) => {
    app.route('/users/:id?')

        //Consulta usuários
       .get((req, res) => {
           const users = getUsers()

           res.send({ users })
       })
       //Inclusão de usuários
       .post((req, res) => {
           const users = getUsers()

           users.push(req.body)
           saveUser(users)

           res.status(201).send('Inclusão efetuada com sucesso')
       })
       //Alteração de usuários
       .put((req, res) => {
           const users = getUsers()

           saveUser(users.map(user => {
               if (user.id === req.params.id) {
                   return {
                       ...user,
                       ...req.body
                   }
               }
               return user
           }))
           res.status(200).send('Atualização efetuada com sucesso')
       })
       //Exclusão de usuários
       .delete((req, res) => {
            const users = getUsers()
            
            saveUser(users.filter(user => user.id !== req.params.id))

            res.status(200).send('Exclusão efetuada com sucesso')
       })
}

module.exports = userRoute











