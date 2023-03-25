import { createElement } from "./tools/jsxFactory";

export class CategoryList {
  props: {
    categories: string[];
    selectedCategory: string;
    callback: (selected: string) => void;
  };

  getContent(): HTMLElement {
    return <div>{["All", ...this.props.categories].map((c) => this.getCategoryButton(c))}</div>;
  }

  getCategoryButton(cat?: string): HTMLElement {
    let selected = this.props.selectedCategory === undefined ? "All" : this.props.selectedCategory;
    let btnClass = selected === cat ? "btn-primary m-1" : "btn-secondary m-1";
    return (
      <div className="d-grid gap-2">
        <button className={`btn ${btnClass}`} onclick={() => this.props.callback(cat)}>
          {cat}
        </button>
      </div>
    );
  }
}
