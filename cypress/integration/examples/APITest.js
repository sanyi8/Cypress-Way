describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      name: 'RestAssured with Java',
      isbn: 'RSU',
      aisle: '2301'
    }).then(function(response) {
      expect(response.body).to.have.property("Msg", "successfully added");
    });
  });
});


// http://216.10.245.166/Library/Addbook.php