-- CreateTable
CREATE TABLE `Customer` (
    `custId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`custId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `unit` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderId` INTEGER NOT NULL AUTO_INCREMENT,
    `orderAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalOrder` INTEGER NOT NULL,
    `discount` INTEGER NOT NULL,
    `CustId` INTEGER NOT NULL,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailOrder` (
    `detailOrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderId` INTEGER NOT NULL,
    `orderUnit` INTEGER NOT NULL,
    `ProductId` INTEGER NOT NULL,

    PRIMARY KEY (`detailOrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_CustId_fkey` FOREIGN KEY (`CustId`) REFERENCES `Customer`(`custId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailOrder` ADD CONSTRAINT `DetailOrder_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailOrder` ADD CONSTRAINT `DetailOrder_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;
