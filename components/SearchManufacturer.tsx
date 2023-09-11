'use client';

import { manufacturers } from '@/constants';
import { SearchManuFacturerProps } from '@/types';

import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';

const { Button, Input, Options, Option } = Combobox;

function SearchManufacturer({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  const [query, setQuery] = useState('');

  const filterdManufacturer =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Button className="top-[14px] absolute">
            <Image
              src={'/car-logo.svg'}
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Button>
          <Input
            className={'search-manufacturer__input'}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Options>
              {filterdManufacturer.length === 0 && query !== '' ? (
                <Option
                  value={query}
                  className={'search-manufacturer__option'}
                ></Option>
              ) : (
                filterdManufacturer.map((item) => (
                  <Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Option>
                ))
              )}
            </Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
