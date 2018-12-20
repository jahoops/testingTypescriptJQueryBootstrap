//command line > node question_model.js questions 
//input must be in ./public/data/
//output goes to ./public/data/
//*** ALL data sets must have unique ID key ***
var model_name = process.argv[2];
var inputfile = './public/data/' + model_name + '.json';
var m = require(inputfile);
var outputfile = './public/data/' + model_name + '.model.js';
var nonIdFields = '';
var keys = [];
var setkeys = [];
for(const key in m[0]) {
    if(key!=='id') {
        keys.push(key);
        setkeys.push(key + ':' + key);
    }
}
model = `
const filename = '.${inputfile}';
const helper = require('.${inputfile}');
let ${model_name} = require('../data/${model_name}.json');

function getItems() {
    return new Promise((resolve, reject) => {
        if (${model_name}.length === 0) {
            reject({
                message: 'no questions available',
                status: 202
            });
        }
        resolve(${model_name});
    });
}

function getItem(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(${model_name}, id)
        .then(item => resolve(item))
        .catch(err => reject(err));
    });
}

function insertItem(${keys.join()}) {
    return new Promise((resolve, reject) => {
        const id = helper.getNewId(${model_name});
        newItem = { id:id,${setkeys.join()} };
        ${model_name}.push(newItem);
        helper.writeJSONFile(filename, ${model_name});
        resolve(newItem);
    });
}

function updateItem(id,${keys.join()}) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(${model_name}, id)
        .then(item => {
            const index = ${model_name}.findIndex(p => p.id == item.id);
            ${model_name}[index] = { id:item.id,${setkeys.join()} };
            helper.writeJSONFile(filename, ${model_name});
            resolve(${model_name}[index]);
        })
        .catch(err => reject(err));
    });
}

function deleteItem(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(${model_name}, id)
        .then(() => {
            ${model_name} = ${model_name}.filter(p => p.id !== id)
            helper.writeJSONFile(filename, ${model_name});
            resolve();
        })
        .catch(err => reject(err));
    });
}

module.exports = {
    insertItem,
    getItems,
    getItem, 
    updateItem,
    deleteItem
};
`;
var fs = require('fs');
fs.writeFile(outputfile, model, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(inputfile + 'processed and model saved to ' + outputfile);
}); 