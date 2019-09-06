'use strict'

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${$('.value').val()}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.result_image').replaceWith(`<img src="${responseJson}" alt="random_breed" class="result_image">`);
    //display the results section
    $('.results').removeClass('hidden');
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