import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
