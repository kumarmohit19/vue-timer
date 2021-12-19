import {flushPromises, mount} from '@vue/test-utils';
import App from '../src/components/Timer.vue';

describe('timer_component', () => {
    let wrapper;

    const IDMAPS = {
        TIMER: 'timer-value',
        STOP_BUTTON: 'stop-button'
    }

    const getByTestId = (id, parent) => {
        if (!parent) {
            parent = wrapper;
        }
        return parent.find(`[data-testid="${id}"]`)
    }

    beforeEach(() => {
        jest.clearAllTimers()
        jest.useFakeTimers();
    })

    it('should render the initial UI as expected', () => {
        wrapper = mount(App, {props: {initial: 60}})
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('60');
        expect(getByTestId(IDMAPS.STOP_BUTTON).element.innerHTML.trim()).toEqual('Stop Timer');
    })

    it('should set the initial value via props', async () => {
        wrapper = mount(App, {props: {initial: 99}})
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('99');
        jest.advanceTimersByTime(10000);
        await flushPromises();
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('89');
    })

    it('should set stop the timer at 0', async () => {
        wrapper = mount(App, {props: {initial: 5}})
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('5');
        jest.advanceTimersByTime(10000);
        await flushPromises();
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('0');
    })

    it('should stop the timer when the stop timer button is clicked', async () => {
        wrapper = mount(App, {props: {initial: 50}})
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('50');
        jest.advanceTimersByTime(5000);
        await flushPromises();
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('45');
        await getByTestId(IDMAPS.STOP_BUTTON).trigger('click');
        jest.advanceTimersByTime(5000);
        await flushPromises();
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('45');
        jest.advanceTimersByTime(25000);
        await flushPromises();
        expect(getByTestId(IDMAPS.TIMER).element.innerHTML.trim()).toEqual('45');
    })
});
