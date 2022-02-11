import { Express, Request, Response } from "express"

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))

  /**
   * @title Register User
   * @method POST
   * @route /api/user
   */
  /**
   * @title Login User
   * @method POST
   * @route /api/sessions
   */
  /**
   * @title Register User
   * @method POST
   * @route /api/user
   */
  /**
   * @title Register User
   * @method POST
   * @route /api/user
   */

  // Login

  // Get the user's sessions

  // Logout

  // Create a post

  // Update a post

  // Get a post

  // Delete a post
}
