import React from 'react';

import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function TestComponent() {
    return (
        <div>
            {/* Test 1: Colour Mix */}
            <h3>1. Colour Mix</h3>
            <p>colour_mix('green', 'red') -> {colour_mix('green', 'red')}</p>
            <p>colour_mix('blue', 'blue') -> {colour_mix('blue', 'blue')}</p>
            <p>colour_mix('red', 'green') -> {colour_mix('red', 'green')}</p>

            {/* Test 2: Largest Product */}
            <h3>2. Largest Product</h3>
            <p>largest_product(-8, 12, 20) -> {largest_product(-8, 12, 20)}</p>
            <p>largest_product(5, 10, 3) -> {largest_product(5, 10, 3)}</p>
            <p>largest_product(0, 0, 0) -> {largest_product(0, 0, 0)}</p>

            {/* Test 3: Day of the week */}
            <h3>3. Day of the week</h3>
            <p>day_of_the_week(1) -> {day_of_the_week(1)}</p>
            <p>day_of_the_week(4) -> {day_of_the_week(4)}</p>
            <p>day_of_the_week(9) -> {day_of_the_week(9)}</p>

            {/* Test 4: Pay Raise */}
            <h3>4. Pay Raise</h3>
            <p>pay_raise('F', 2, 25000) -> {pay_raise('F', 2, 25000)}</p>
            <p>pay_raise('P', 5, 30000) -> {pay_raise('P', 5, 30000)}</p>
            <p>pay_raise('F', 15, 50000) -> {pay_raise('F', 15, 50000)}</p>

            {/* Test 5: Leap Year */}
            <h3>5. Leap Year</h3>
            <p>is_leap(1999) -> {is_leap(1999).toString()}</p>
            <p>is_leap(2000) -> {is_leap(2000).toString()}</p>
            <p>is_leap(2024) -> {is_leap(2024).toString()}</p>
        </div>
    );
}

export default TestComponent;
