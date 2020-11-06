import { TestBed, async } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortOptionsEnums } from 'src/typings/datatable';
import { getSortedData, getAllKeysFromData, cleanValue } from 'src/utils/datatable';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Inventory Manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Inventory Manager');
  });

  it('should return sorted list', () => {
    const inputList = [
      {
        product_id: 1,
        amazon_image_url: "test1.jpg",
        asin: "test1",
        title: "Test1",
        inventory_level: 1,
        lead_time: 1,
      },
      {
        product_id: 2,
        amazon_image_url: "test2.jpg",
        asin: "test2",
        title: "Test2",
        inventory_level: 2,
        lead_time: 2,
      }
    ];
    const resultList = [
      {
        product_id: 2,
        amazon_image_url: "test2.jpg",
        asin: "test2",
        title: "Test2",
        inventory_level: 2,
        lead_time: 2,
      },
      {
        product_id: 1,
        amazon_image_url: "test1.jpg",
        asin: "test1",
        title: "Test1",
        inventory_level: 1,
        lead_time: 1,
      },
    ];
    expect(getSortedData(inputList, "product_id", SortOptionsEnums.DESCENDING)).toEqual(resultList);
  });

  it('should transform key to header text', () => {
    expect(cleanValue("test_one_input")).toEqual("TEST ONE INPUT");
  });

  it('should return table headers from product list', () => {
    const testInput = [
      {
        product_id: 1,
        amazon_image_url: "test1.jpg",
        asin: "test1",
        title: "Test1",
        inventory_level: 1,
        lead_time: 1,
      },
    ];
    const output = [
      "product_id",
      "amazon_image_url",
      "asin",
      "title",
      "inventory_level",
      "lead_time",
    ];
    expect(getAllKeysFromData(testInput)).toEqual(output);
  });

});
