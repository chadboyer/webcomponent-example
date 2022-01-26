const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <p id="p"></p>
  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>`;

class RiskToleranceQuestionaire extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
  }

/* parameters */
    get prospectId() {
      return this.getAttribute('prospectId');
    }

    set prospectId(newValue) {
      this.setAttribute('prospectId', newValue);
    }


  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("inc").onclick = () => this.inc();
    this.shadowRoot.getElementById("dec").onclick = () => this.dec();

    this.shadowRoot.getElementById("p").innerHTML = this.prospectId;


    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById("count").innerHTML = count;
    
  }
}

customElements.define("risk-tolerance-questionaire", RiskToleranceQuestionaire);
