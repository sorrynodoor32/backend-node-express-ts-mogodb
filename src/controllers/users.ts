import express from 'express'
import { deleteUserById, getUserById, getUsers } from '../db/users'

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const user = await getUsers()

        return res.status(200).json(user)
    } catch (err) {
        console.log(err)
        return res.sendStatus(400)
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        const deleteUser = await deleteUserById(id)

        return res.status(200).json(deleteUser)

    } catch (err) {
        console.log(err)
        return res.sendStatus(400)
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { username } = req.body

        const user = await getUserById(id)
        user.username = username

        await user.save()

        return res.status(200).json(user)
        if (!username) {
            return res.sendStatus(400)
        }

    } catch (err) {
        console.log(err)
        return res.sendStatus(400)
    }
}