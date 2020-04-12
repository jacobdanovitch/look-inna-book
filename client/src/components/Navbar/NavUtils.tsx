import React from 'react';

export const logoUrl = "https://image.flaticon.com/icons/png/128/39/39237.png";
export const cartUrl = "https://pngimage.net/wp-content/uploads/2018/06/shopping-basket-icon-png-.png";
export const searchUrl = "https://www.stickpng.com/assets/images/585e4ad1cb11b227491c3391.png";


export function dataMaybeReady({ loading, error, data }: any) {
    let out: any = { error, loading }

    if (error) {
        out['message'] = <React.Fragment>
            Something went wrong.
                        </React.Fragment>
        return out;
    }


    const arr = loading ? [{ name: "Loading...", description: null }] : data.__type.fields
    out['options'] = arr.map(({ name, description }: { name: string, description: string }, i: number) => {
        return { id: i, value: name, label: name };
    });

    return out;
}

export function sortDropdownOptions(options: Array<object>) {
    return options.filter((x: any) => x.value.indexOf("_") === -1)
        .sort((a: any, b: any) => {
            if (a.value > b.value) return -1
            else if (a.value < b.value) return 1
            return 0
        })
        .map((x: any) => {
            return <option>{x.value}</option>
        })
}