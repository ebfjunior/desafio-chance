import Report from '../src/business/report.js';

it("Object's properties should be initialized properly", () => {
  const report = new Report({id: "1", title: "Title 1", description: "Description", status: "1", userId: "1", categoryId: "1"});

  expect(report.id).toBe("1");
  expect(report.title).toBe("Title 1");
  expect(report.description).toBe("Description");
  expect(report.status).toBe("1");
  expect(report.userId).toBe("1");
  expect(report.categoryId).toBe("1");

});

it('isNew method should verify if object is new or not', () => {
  const report1 = new Report({id: "1", title: "Title 1", description: "Description", status: "1", userId: "1", categoryId: "1"});
  expect(report1.isNew()).toBe(false);
  
  const report2 = new Report({title: "Title 2", description: "Description", status: "2", userId: "2", categoryId: "2"});
  expect(report2.isNew()).toBe(true);

});