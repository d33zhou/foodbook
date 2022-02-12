import { Box, Button } from '@mui/material';
import RecipeListItem from './RecipeListItem';

const recipesAPI = [
  {
    id: 1,
    title: 'Awesome Recipe',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend rutrum elementum. Pellentesque at mi nisl. Aenean tristique neque vel egestas imperdiet. Phasellus convallis nisl vitae sapien ultricies consequat. Ut vel elit diam. Phasellus est lorem, tempor ut purus vel, luctus suscipit lorem. Proin ornare elit vitae dictum tincidunt. Curabitur enim diam, volutpat sed lorem ac, sollicitudin hendrerit est. Nunc vulputate scelerisque dolor, maximus scelerisque metus eleifend nec. Donec id urna rhoncus nisi varius ultricies. Nam tincidunt elit molestie est maximus, eu mattis nibh consectetur. Curabitur scelerisque nisi nec risus scelerisque ullamcorper. Curabitur molestie, dui porttitor mollis dapibus, lacus enim pellentesque arcu, sit amet consectetur nisl eros ac mauris. 
    
    Aliquam a sapien ipsum. Sed gravida felis id sapien ornare, vel porttitor ante condimentum. Cras nisl sapien, accumsan ut finibus convallis, convallis vitae est. Cras ultrices magna turpis, eget suscipit libero blandit at. Morbi fermentum leo molestie augue tincidunt, id bibendum sapien blandit. Maecenas vitae massa dolor. Donec sed ex imperdiet, fringilla diam id, laoreet nulla. Cras pulvinar aliquet sodales.`,
  },
  {
    id: 2,
    title: 'Curry Cauliflower',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend rutrum elementum. Pellentesque at mi nisl. Aenean tristique neque vel egestas imperdiet. Phasellus convallis nisl vitae sapien ultricies consequat. Ut vel elit diam. Phasellus est lorem, tempor ut purus vel, luctus suscipit lorem. Proin ornare elit vitae dictum tincidunt. Curabitur enim diam, volutpat sed lorem ac, sollicitudin hendrerit est. Nunc vulputate scelerisque dolor, maximus scelerisque metus eleifend nec. Donec id urna rhoncus nisi varius ultricies. Nam tincidunt elit molestie est maximus, eu mattis nibh consectetur. Curabitur scelerisque nisi nec risus scelerisque ullamcorper. Curabitur molestie, dui porttitor mollis dapibus, lacus enim pellentesque arcu, sit amet consectetur nisl eros ac mauris. 
    
    Aliquam a sapien ipsum. Sed gravida felis id sapien ornare, vel porttitor ante condimentum. Cras nisl sapien, accumsan ut finibus convallis, convallis vitae est. Cras ultrices magna turpis, eget suscipit libero blandit at. Morbi fermentum leo molestie augue tincidunt, id bibendum sapien blandit. Maecenas vitae massa dolor. Donec sed ex imperdiet, fringilla diam id, laoreet nulla. Cras pulvinar aliquet sodales.`,
  },
  {
    id: 3,
    title: 'Moms Spaghetti',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend rutrum elementum. Pellentesque at mi nisl. Aenean tristique neque vel egestas imperdiet. Phasellus convallis nisl vitae sapien ultricies consequat. Ut vel elit diam. Phasellus est lorem, tempor ut purus vel, luctus suscipit lorem. Proin ornare elit vitae dictum tincidunt. Curabitur enim diam, volutpat sed lorem ac, sollicitudin hendrerit est. Nunc vulputate scelerisque dolor, maximus scelerisque metus eleifend nec. Donec id urna rhoncus nisi varius ultricies. Nam tincidunt elit molestie est maximus, eu mattis nibh consectetur. Curabitur scelerisque nisi nec risus scelerisque ullamcorper. Curabitur molestie, dui porttitor mollis dapibus, lacus enim pellentesque arcu, sit amet consectetur nisl eros ac mauris. 
    
    Aliquam a sapien ipsum. Sed gravida felis id sapien ornare, vel porttitor ante condimentum. Cras nisl sapien, accumsan ut finibus convallis, convallis vitae est. Cras ultrices magna turpis, eget suscipit libero blandit at. Morbi fermentum leo molestie augue tincidunt, id bibendum sapien blandit. Maecenas vitae massa dolor. Donec sed ex imperdiet, fringilla diam id, laoreet nulla. Cras pulvinar aliquet sodales.`,
  },
];

const parsedRecipes =
  Array.isArray(recipesAPI) &&
  recipesAPI.map((recipe) => {
    return (
      <RecipeListItem
        key={recipe.id}
        title={recipe.title}
        description={recipe.description}
      />
    );
  });

const RecipeList = () => {
  return <>{parsedRecipes}</>;
};

export default RecipeList;
