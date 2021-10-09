import { Context, Callback, Handler } from 'aws-lambda';
import { findUserById } from "../../../model/user";

export const run: Handler = async (event: any, context: Context, callback: Callback) => {

	console.log('Function name: ', context.functionName)
	console.log('Remaining time: ', context.getRemainingTimeInMillis())
	
	context.callbackWaitsForEmptyEventLoop = false;

	// -------------------------------------------------------------------
    console.log('event: ',event)
    console.log('contenxt:', context)
    console.log('event_path',event.path.user_id)
    return await findUserById(event.path.user_id)
};

