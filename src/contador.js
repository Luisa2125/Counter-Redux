import {fromJS} from 'immutable'

const SUMAR = 'SUMAR'

export const SUMARCount = ()=>(
	{
		type: SUMAR
	}
)
const EstadoInicial = fromJS(
	{
		counter: 0
	}
)

const RealizarSuma = (state=EstadoInicial, action={})=>{
	switch(action.type){
		case SUMAR:
		console.log(state+1)
		return state + 1
	}
}
