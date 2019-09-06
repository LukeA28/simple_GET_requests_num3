'use strict'

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${$('.value').val()}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.error(`${responseJson.message} is not a valid breed.`));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.result_image').replaceWith(
      `<img src="${responseJson.message}" class="result_image">`);
    //display the results section
    if (responseJson.status !== "error") {
      $('.results').removeClass('hidden');
    }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});