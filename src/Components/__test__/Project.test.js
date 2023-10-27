import {render} from '@testing-library/react';
import Projects from '../Projects';

test("render project",()=>{
    const {getByTestId}=render(<Projects/>);
    const head=getByTestId('projectHeading');
    expect(head).toBeTruthy();

})