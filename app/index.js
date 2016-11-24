import singleDefaultExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';
import templateLiteral from './newSyntax/template-literal';
import spread from './newSyntax/spread';
import arrowFunctions from './newSyntax/arrow-functions';

import enhancedObjectProperties from './functionsAndObjects/enhancedObjectProperties';
import destructuringAssignment from './functionsAndObjects/destructuringAssignment';
import defaultParameters from './functionsAndObjects/defaultParameters';
import thisKeyword from './functionsAndObjects/thisKeyword';

import creatingPromises from './promises/promises';
import promisesAll from './promises/promisesAll';
import jokes from './promises/jokes';

import classes from './classes/index';

import maps from './mapsAndSets/maps';
import sets from './mapsAndSets/sets';

import generator from './generators/generator';
import promisesWithGenerators from './generators/promisesWithGenerators';

import spreadOnObjects from './beyondES6/spreadOnObjects';
import reactApp from './beyondES6/reactApplication';

const modules = () => {
  singleDefaultExports();
  multipleNamedExports();
}

const newSyntax = () => {
  theLetKeyword();
  constant();
  templateLiteral();
  spread();
  arrowFunctions();
}

const functionsAndObjects = () => {
  enhancedObjectProperties();
  destructuringAssignment();
  defaultParameters();
  thisKeyword();
}

const promises = () => {
  // creatingPromises();
  promisesAll();
  // jokes();

}

const mapsAndSets = () => {
  maps();
  sets();
}

// modules();
// newSyntax();
// functionsAndObjects();
// promises();
// classes();
// mapsAndSets();
// generator();
// promisesWithGenerators();
// spreadOnObjects();
reactApp();
