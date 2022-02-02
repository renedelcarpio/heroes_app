import { MemoryRouter, Route, Routes } from 'react-router-dom';

import HeroScreen from './HeroScreen';
import { mount } from 'enzyme';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));
