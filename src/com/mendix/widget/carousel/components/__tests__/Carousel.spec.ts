import { ShallowWrapper, shallow } from "enzyme";
import { createElement } from "react";

import { Carousel, CarouselProps, Image } from "../Carousel";
import { CarouselControl } from "../CarouselControl";
import { CarouselItem } from "../CarouselItem";

describe("Carousel", () => {
    let images: Image[];
    let carousel: ShallowWrapper<CarouselProps, any>;
    let carouselWrapper: ShallowWrapper<CarouselProps, any>;

    it("renders the structure correctly", () => {
        images = [ { url: "https://www.google.com/images/nav_logo242.png" } ];
        carousel = shallow(createElement(Carousel, { images }));

        expect(carousel.hasClass("carousel")).toBe(true);

        const carouselChildren = carousel.children();

        expect(carouselChildren.length).toBe(3);
        expect(carouselChildren.first().hasClass("carousel-inner")).toBe(true);

        carouselWrapper = carouselChildren.first();

        expect(carouselWrapper.children().length).toBe(1);
        expect(carouselWrapper.children().first().type()).toBe(CarouselItem);

        expect(carousel.childAt(1).type()).toBe(CarouselControl);
        expect(carousel.childAt(2).type()).toBe(CarouselControl);
    });

    describe("with no images", () => {
        beforeEach(() => carousel = shallow(createElement(Carousel)) );

        it("renders no carousel items", () => {
            const carouselItems = carousel.find(CarouselItem);

            expect(carouselItems.length).toBe(0);
        });
    });

    describe("with one image", () => {
        beforeEach(() => {
            images = [ { url: "https://www.google.com/images/nav_logo242.png" } ];
            carousel = shallow(createElement(Carousel, { images }));
        });

        it("renders one carousel item", () => {
            const carouselItem = carousel.find(CarouselItem);

            expect(carouselItem.length).toBe(1);

            expect(carouselItem.props().active).toBe(true);
            expect(carouselItem.props().url).toBe(images[0].url);
        });
    });

    describe("with multiple images", () => {
        beforeEach(() => {
            images = [
                { url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" },
                { url: "https://www.google.com/images/nav_logo242.png" }
            ];
            carousel = shallow(createElement(Carousel, { images }));
            carouselWrapper = carousel.find(".widget-carousel-item-wrapper");
        });

        it("renders all carousel items", () => {
            const carouselItems = carouselWrapper.find(CarouselItem);

            expect(carouselItems.length).toBe(2);

            expect(carouselItems.at(0).props().active).toBe(true);
            expect(carouselItems.at(0).props().url).toBe(images[0].url);

            expect(carouselItems.at(1).props().active).toBe(false);
            expect(carouselItems.at(1).props().url).toBe(images[1].url);
        });

        it("renders the first carousel item active", () => {
            const firstCarouselItem = carouselWrapper.find(CarouselItem).first();

            expect(firstCarouselItem.prop("active")).toBe(true);
        });

        it("renders only one active carousel item", () => {
            const activeItems = carouselWrapper.find(CarouselItem).filterWhere(c => c.prop("active"));

            expect(activeItems.length).toBe(1);
        });
    });
});
