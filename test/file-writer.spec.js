"use strict"

const os = require("os")
const path = require("path")
const {expect} = require("chai")
const writeFiles = require("../src/file-writer")
const {clearOutFolder, getAllFilesContent} = require("./test-utils")

const rootPath = path.join(os.tmpDir(), "i18n-unit-test/file-writer")

describe("file-writer", () => {

    beforeEach(() => clearOutFolder(rootPath))

    it("writes single file with single line", () => test({"test1.txt": "test"}))
})

const test = files => {
    writeFiles(rootPath, files)
    return expect(getAllFilesContent(rootPath)).to.deep.equal(files)
}