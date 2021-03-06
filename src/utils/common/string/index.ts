class StringUtils {

    string: String;

    constructor(string: String) {
        this.string = string
    }

    onChangeAlias() {
        let str = this.string + '';
        str = str.toLowerCase();
        str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a');
        str = str.replace(/[èéẹẻẽêềếệểễ]/g, 'e');
        str = str.replace(/[ìíịỉĩ]/g, 'i');
        str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o');
        str = str.replace(/[ùúụủũưừứựửữ]/g, 'u');
        str = str.replace(/[ỳýỵỷỹ]/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(
            /[!@%^*()+=<>?/,.:;'"&#[\]~$_`\-{}|\\]/g,
            ' ',
        );
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        return str;
    };
}

export default StringUtils
