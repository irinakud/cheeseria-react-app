import { render, screen, waitFor } from "@testing-library/react";
import { Cheeseria } from ".";

const fakeData = [
    {
      id: '1-1-1',
      type: 'gouda',
      pricePerKilo: 81,
      color: 'yellow',
      pictureFile: 'https://cheese.com/media/img/cheese/GOUDA_SqYJjRh.jpg',
    },
    {
      id: '1-2-1',
      type: 'mozzarella',
      pricePerKilo: 17,
      color: 'white',
      pictureFile: 'https://cheese.com/media/img/cheese/Mozzarella.jpg',
    },
    {
      id: '333',
      type: 'brie',
      pricePerKilo: 100,
      color: 'yellow',
      pictureFile: 'https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg',
    },
    {
      id: '4',
      type: 'mascarpone',
      pricePerKilo: 340,
      color: 'white',
      pictureFile: 'https://cheese.com/media/img/cheese/mascarpone.jpg',
    },
    {
      id: '5',
      type: 'cheddar',
      pricePerKilo: 10,
      color: 'yellow',
      pictureFile: 'https://cheese.com/media/img/cheese/wiki/cheddar.jpg',
    },
];

describe("Cheeseria", () => {
  it("can render", async () => {
    expect.hasAssertions();

    global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, reject) => {
        resolve({
        ok: true,
        status: 200,
        json: () => {
            return fakeData;
        },
        });
    });
    });

    const { baseElement } = render(<Cheeseria/>)
    await waitFor(() =>
        expect(screen.getByTestId("gouda-test-id")).toHaveTextContent("Type: gouda")
    );
   
    // TODO: more tests to add      
    expect(baseElement).toMatchSnapshot();
      
  });
});
