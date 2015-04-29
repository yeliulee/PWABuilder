import Ember from 'ember';

export default Ember.Component.extend({
  step: null,
  nextStep: null,
  isShowingBody: false,
  showNextStep: true,
  allowToggle: false,
  tagName: 'li',
  classNames: ['step'],
  classNameBindings: ['stepId', 'isEnabled'],
  stepId: function () {
    return 'step' + this.get('step');
  }.property('step'),
  isEnabled: function () {
    var cssClass;
    if(this.get('allowToggle')){
      cssClass = 'step--enabled';
    } else {
      cssClass = 'step--disabled';
    }
    return cssClass;
  }.property('allowToggle'),
  actions: {
    toggleBody: function() {
      if(this.allowToggle) {
        this.toggleProperty('isShowingBody');
      }
    },
    updateStep: function(currentStep, nextStep){
      ga('send', 'event', 'item', 'click', 'generator-step-'+this.step);
      this.toggleProperty('isShowingBody');
      this.sendAction('action', currentStep, nextStep);
      return true; // keep bubbling
    }
  }
});
