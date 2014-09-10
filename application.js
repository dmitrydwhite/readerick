(function() {
  'use strict';
  var rdrk = angular.module('Readerick', []);

  rdrk.controller('QuoteController', function() {
    this.quotes = data;
  });

  var data = [
    {
      id: 1,
      author: 'Leo Tolstoy',
      source: 'War and Peace',
      content: 'In all history there is no war which was not hatched by the governments, the governments alone, independent of the interests of the people, to whom war is always pernicious even when successful.'
    },
    {
      id: 2,
      author: 'Leo Tolstoy',
      source: 'War and Peace',
      content: 'Historians are like deaf people who go on answering questions that no one has asked them.'
    },
    {
      id: 3,
      author: 'Ernest Hemingway',
      source: 'A Moveable Feast',
      content: 'All you have to do is write one true sentence. Write the truest sentence that you know.'
    }
  ];

  console.log('readerick is applicationing');
})();
