import graphene
import graphql_jwt

import links.schema
import user.schema


class Query(user.schema.Query, links.schema.Query, graphene.ObjectType):
    pass

class Mutation(links.schema.Mutation, user.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
