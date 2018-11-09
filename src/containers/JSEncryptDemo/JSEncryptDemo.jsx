/**
 * Created by summer on 2018/11/10.
 */
import React, { Component } from 'react';
import { JSEncrypt } from 'jsencrypt';

const encryptMock = `-----BEGIN RSA PRIVATE KEY-----
    MIICXgIBAAKBgQDmm5gZZ7xe+C9vvTAF9U0cN1HXFDiVf6fDWdQIZLw0Tjt1RPBC
    8A0mtA+NqbP00LEinxYCQ5evZ8npUpfl9y4EFtBk8eLvJUQsCbl/M3ERRZMK8/Va
    fUzKm7sU7yp6mmjzTsU4WAgK7FoXz/ixNSbsqMsVLG2BDLUlM4YhwypJ9QIDAQAB
    AoGBALSzk7nEmczpOXKbkrf4gdXsW0rn43byMulWyFlTZk6uRtUbkhFBvWxoiA9/
    vS3HIiZ49mwLvx6Je6RDPhfLWtgIecoZy7uJXVSVWJ032zUuzoD4I+N5pU9b5f16
    yAXa2UI/CEU5joRmvmt1Uv147i7/Pn7+yl8Gvy80vl3cF9+BAkEA+oDe8ndfOWeH
    DQWBEj8qFEp84fyn8kg08FMcfT4BA7Yqcsn8PmITA0vHPH8BWtaNZIxpMI31v/LW
    fI6HOZoBsQJBAOuq9yteakJWY3iGUTenvlNK7c8buVhL6kJTUNNIi3sBj+tK8Zhb
    xZNR1zPSIH6PyCJPNft8z+DDRlmo9Qr3OYUCQQCKnc9A6o9V65TOvtH6b9twGPvb
    7Xxd1Fj+926XWz0ieaYpmN2tA4Yz17XrIvhz9K+PCSeYB6YKTm0jxZbMaA0xAkEA
    zK2MxA7ZLMpI1AmcCkFWzJJ8He9PNz+fsoEX5pjQA0IlE87gK1oxK7TdujUaYbFQ
    uXOgR85r4SLYO9DBGggD3QJAE29ro+xGDlhLislOJYH5KBECcXzXlIKGPcnGm6Ey
    et1Jk+VCznmo4iyLn+m47z1PO8TAPQgFXyZkys0YnqVHEw==
    -----END RSA PRIVATE KEY-----`;

const decryptMock = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDmm5gZZ7xe+C9vvTAF9U0cN1HX
    FDiVf6fDWdQIZLw0Tjt1RPBC8A0mtA+NqbP00LEinxYCQ5evZ8npUpfl9y4EFtBk
    8eLvJUQsCbl/M3ERRZMK8/VafUzKm7sU7yp6mmjzTsU4WAgK7FoXz/ixNSbsqMsV
    LG2BDLUlM4YhwypJ9QIDAQAB
    -----END PUBLIC KEY-----`;

export default class JSEncryptDemo extends Component {
    state = {
        encryptInput: '123'
    };

    testJSEncrypt = () => {
        // Encrypt with the public key...

        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(encryptMock);
        var encrypted = encrypt.encrypt(this.state.encryptInput);

        // Decrypt with the private key...

        /*eslint no-undef: "error"*/
        var decrypt = new JSEncrypt();
        decrypt.setPrivateKey(decryptMock);
        var uncrypted = decrypt.decrypt(this.state.encryptInput);

        // Now a simple check to see if the round-trip worked.
        if (uncrypted == this.state.encryptInput) {
            alert('It works!!!');
        }
        else {
            alert('Something went wrong....');
        }
    };

    render() {
        return (
            <div>
                <label htmlFor="privkey">Private Key</label><br/>
                <textarea rows="15" cols="65">{encryptMock}</textarea><br/>
                <label htmlFor="pubkey">Public Key</label><br/>
                <textarea rows="15" cols="65">{decryptMock}</textarea><br/>
                <label htmlFor="input">Text to encrypt:</label><br/>
                <textarea name="input" type="text" rows="4" cols="70">This is a test!</textarea><br/>
                <input onClick={(e) => {
                    e.preventDefault();
                    this.testJSEncrypt();
                }} type="button" defaultValue="Test Me!!!" /><br/>
            </div>
        )
    }
}