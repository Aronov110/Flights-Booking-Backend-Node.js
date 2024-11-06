// Import necessary modules and dependencies
import { wrap } from "@/utils/generalUtils";
import express, { type Response, type Request } from "express";

// Create a new express router
export const flightRoutes = express.Router();

// POST request for creating a new Flight.
flightRoutes.post(
	"/flight",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);

// POST request for updating a Flight.
flightRoutes.post(
	"/updateFlight",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);


// GET request for all Flights in the database.
flightRoutes.get(
	"/flights",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);

// GET request for a specific Flight by ID.
flightRoutes.get(
	"/flight",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);

// DELETE request to delete a Flight by ID.
flightRoutes.delete(
	"/flight/:id",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);

// DELETE request to delete all Flights.
flightRoutes.delete(
	"/flights",
	wrap(async (req: Request, res: Response) => {
		return res.status(200).send();
	}),
);
