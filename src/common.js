export function get_filename_from_path(path) {
    let arr = path.split('\\');
    return arr[arr.length - 1].split('\.')[0];
}

export function get_label_from_path(path) {
    let reg = /image_([^a-z])_15*/;
    return path.match(reg)[1];
}

export function get_label_from_final_data(data, index) {
    return data[index].label;
}