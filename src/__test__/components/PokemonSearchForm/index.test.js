import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProviderMock from "../../../__mocks__/ProviderMock";
import PokemonSearchForm from "../../../components/PokemonSearchForm";
import { SearchButton } from "../../../components/PokemonSearchForm/Styled";

describe("<PokemonSearchForm />", () => {
    const wrapper = mount(
        <ProviderMock>
            <PokemonSearchForm />
        </ProviderMock>
    );
    test("Should render", () => {
        expect(wrapper.length).toEqual(1); //Check that the General component is rendering
    });
    test("should render the title", () => {
        const title = wrapper.find("h1");
        expect(title.text()).toEqual("What Pokemon are you looking for?");
    });
    test("should render the form", () => {
        const form = wrapper.find("form");
        expect(form.length).toEqual(1);
    });

    test("should simulate pokemon Name field and clear it", () => {
        let textField = wrapper.find(".pokemon-search__input");
        let clearButton = wrapper.find("#clearButton");
        textField.simulate("change", {
            target: { value: "25" },
        });
        textField = wrapper.find("#pokemonName"); //This is because the input changes while the wrapper updates
        expect(textField.props().value).toEqual("25");
        clearButton = wrapper.find("#clearButton").first();
        //Now clear the input
        clearButton.simulate("click");
        textField = wrapper.find("#pokemonName"); //This is because the input changes while the wrapper updates
        expect(textField.props().value).toEqual("");
    });
});

describe("<SearchButton/>", () => {
    const onSubmitHandler = jest.fn();
    const wrapper = mount(
        <ProviderMock>
            <SearchButton onClick={onSubmitHandler} />
        </ProviderMock>
    );
    test("should fire onClick", () => {
        wrapper.simulate("click");
        expect(onSubmitHandler).toBeCalledTimes(1);
    });
});

describe("Form Snapshot", () => {
    test("should match snapshot", () => {
        const form = create(
            <ProviderMock>
                <PokemonSearchForm />
            </ProviderMock>
        );
        expect(form.toJSON()).toMatchSnapshot();
    });
});
