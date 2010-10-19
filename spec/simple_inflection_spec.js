describe('SimpleInflection', function() {
  it('can camelize an underscored string', function() {
    expect(SimpleInflection.camelize("player")).toEqual("Player");
    expect(SimpleInflection.camelize("training_group")).toEqual("TrainingGroup");
    expect(SimpleInflection.camelize("User")).toEqual("User");
  });
  
  it('can singularize a pluralized word', function() {
    expect(SimpleInflection.singularize('players')).toEqual('player');
    expect(SimpleInflection.singularize('Players')).toEqual('Player');
    expect(SimpleInflection.singularize('player')).toEqual('player');
  });
  
  it('can classify an underscored and pluralized string', function() {
    expect(SimpleInflection.classify('players')).toEqual('Player');
    expect(SimpleInflection.classify('training_groups')).toEqual('TrainingGroup');
  });
  
  it('can underscore a camelized string', function() {
    expect(SimpleInflection.underscore('Player')).toEqual('player');
    expect(SimpleInflection.underscore('TrainingGroup')).toEqual('training_group');
  });
});
