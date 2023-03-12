import {getInYard} from './getInYard';
import {getCatalogue} from './getCatalogue';
import {mapToDomainSpaceShips} from './mapToSpaceShips';

export const getSpaceShips = async ({getInYard_ = getInYard, getCatalogue_ = getCatalogue} = {getInYard_ : getInYard, getCatalogue_ : getCatalogue})=>{
    const [inYard, catalogue ] = await Promise.all([getInYard_(), getCatalogue_()])

    return mapToDomainSpaceShips({inYard, catalogue})
}
