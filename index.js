import Macy from 'macy';

const checkBefore = function(el, content) {
  return (window.getComputedStyle(el, ':after').getPropertyValue('content') == content);
}

const checkCSS = function (_this) {
  if (checkBefore(_this.container, '"macy"') && !_this.activeCSS) {
    _this.reInit();
    _this.activeCSS = true;
  } else if (!checkBefore(_this.container, '"macy"')) {
    _this.remove();
    _this.activeCSS = false;
  }
};

function Macy_watch(opts) {
  if (!(this instanceof Macy_watcher)) { return new Macy_watcher(opts); }
}

class Macy_watcher extends Macy {
  constructor(opts) {
    super(opts);
    this.watchCSS = typeof opts.watchCSS !== 'undefined' ? opts.watchCSS : false;
    this.activeCSS = true;
    
    if (this.watchCSS) {
      checkCSS(this);
      window.addEventListener('resize', checkCSS.bind(this, this));
      this.on('macy.recalculated', checkCSS.bind(this, this));
    }
  }
}

/**
 * Export Macy
 */
// module.exports = Macy;
export default Macy_watch;
