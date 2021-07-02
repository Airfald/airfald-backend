# airfald-web

## 框架思想

![分层](https://segmentfault.com/img/bVbjr45?w=1170&h=430)

- 约定大于规范

- 为什么需要dto. dto作用

```
请求参数与 Dto
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
拿到请求参数后，我们经常需要做一些操作，比如存储数据库等，那么这样的数据需要经过校验、转换的环节，如何更加规范地定义和使用这种传输中的数据，Nest推荐声明DTO：

DTO(Data Transfer Object)这个概念实际上体现的是分层设计架构，最早应用于J2EE企业级架构解决方案，数据库中的数据和视图层所需要的数据是有差异的，在各层之间需要转换传输的对象抽象为DTO。

在维基百科中将DTO定义为在进程中传输的数据对象，尤其是远程调用场景。更宽泛的说，DTO 定义了在网络上是以什么样的格式传输的。

In the field of programming a data transfer object (DTO[1][2]) is an object that carries data between processes. The motivation for its use is that communication between processes is usually done resorting to remote interfaces (e.g., web services), where each call is an expensive operation.[2] Because the majority of the cost of each call is related to the round-trip time between the client and the server, one way of reducing the number of calls is to use an object (the DTO) that aggregates the data that would have been transferred by the several calls, but that is served by one call only.[2]

在Nest中，我们可以使用Class来定义DTO，当然使用interface也是可以的，不过Class的方式更有助后续结合Pipe可以在DTO上做更多事情（如校验等），也可以让Nest在运行态感知DTO的存在。
```

```
相当于react中interface

此前我们列举的的 POST 路由处理程序样例中，处理程序没有接受任何客户端参数。我们在这里通过添加 @Body() 参数来解决这个问题。

首先（如果您使用 TypeScript），我们需要确定 DTO（数据传输对象）模式。DTO是一个对象，它定义了如何通过网络发送数据。我们可以通过使用 TypeScript 接口（Interface）或简单的类（Class）来定义 DTO 模式。有趣的是，我们在这里推荐使用类。为什么？类是 JavaScript ES6 标准的一部分，因此它们在编译后的 JavaScript 中被保留为实际实体。另一方面，由于 TypeScript 接口在转换过程中被删除，所以 Nest 不能在运行时引用它们。这一点很重要，因为诸如管道（Pipe）之类的特性为在运行时访问变量的元类型提供更多的可能性。
```

## 目的

不是掌握所有知识点细节，而是了解这个开发流程。 道而不是术


设计 =》 实现

- 登录授权，权限设计

## 参考

1. https://www.meteorlxy.cn/posts/2019/10/28/nestjs-project-notes.html

2. https://www.toimc.com/nestjs-example-project-4/




## 异常

- http 请求异常统一filter处理
- 代码异常 统一code码处理































