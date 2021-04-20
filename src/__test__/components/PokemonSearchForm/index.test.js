import React from "react";
import { shallow } from "enzyme";
import PokemonSearchForm from "../../../components/PokemonSearchForm";

describe("<PokemonSearchForm>", () => {
    test("Should render", () => {
        const wrapper = shallow(<PokemonSearchForm />);
        expect(wrapper.length).toEqual(1); //Check that the General component is rendering
    });
});
