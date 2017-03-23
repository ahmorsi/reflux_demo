/**
 * Created by ahmed on 22.02.17.
 */
var ClickedStore = Reflux.createStore({
    listenables: [ClickedAction],
    clicked: function(n) {
        this.trigger(n);
    }
});
